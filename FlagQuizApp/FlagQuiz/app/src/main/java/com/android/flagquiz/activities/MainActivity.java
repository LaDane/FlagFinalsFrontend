package com.android.flagquiz.activities;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.android.flagquiz.database.DBHelper;
import com.android.flagquiz.databinding.ActivityMainBinding;
import com.android.flagquiz.models.Model;
import com.android.flagquiz.network.MyClient;
import com.android.flagquiz.utils.PrefUtil;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {
    ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        ProgressDialog pd = new ProgressDialog(this);
        pd.setMessage("Please wait...");
        pd.setCancelable(false);
        pd.setCanceledOnTouchOutside(false);

        DBHelper db = new DBHelper(this);
        PrefUtil.saveCurrent(this, 0);
        PrefUtil.saveCorrect(this, 0);

        binding.start.setOnClickListener(view -> {
            db.deleteQuestions();
            pd.show();
            MyClient.getInstance().getMyApi().generate()
                    .enqueue(new Callback<JsonObject>() {
                        @Override
                        public void onResponse(@NonNull Call<JsonObject> call, @NonNull Response<JsonObject> response) {
                            pd.dismiss();
                            Log.e("RESPONSE",new Gson().toJson(response.body()));
                            JsonObject jsonObject = response.body();
                            assert jsonObject != null;
                            JsonArray array = jsonObject.get("questions").getAsJsonArray();

                            for (int i = 0; i < array.size(); i++) {
                                JsonObject obj = array.get(i).getAsJsonObject();

                                String id = obj.get("correctCountryId").getAsString();
                                String svg = obj.get("svg").getAsString();
                                String answer1 = obj.get("answer1").getAsString();
                                String answer2 = obj.get("answer2").getAsString();
                                String answer3 = obj.get("answer3").getAsString();
                                String answer4 = obj.get("answer4").getAsString();
                                String points = obj.get("points").getAsString();
                                db.insertQuestion(new Model(id, svg, answer1, answer2, answer3, answer4, points));

                            }
                            startActivity(new Intent(MainActivity.this, QuestionActivity.class));
                            finish();

                        }

                        @Override
                        public void onFailure(@NonNull Call<JsonObject> call, @NonNull Throwable t) {
                            pd.dismiss();
                            Toast.makeText(MainActivity.this, t.getMessage(), Toast.LENGTH_SHORT).show();
                        }
                    });
        });
    }
}
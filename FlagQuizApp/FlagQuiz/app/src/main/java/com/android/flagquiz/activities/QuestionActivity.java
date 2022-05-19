package com.android.flagquiz.activities;

import android.annotation.SuppressLint;
import android.app.ProgressDialog;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.android.flagquiz.database.DBHelper;
import com.android.flagquiz.databinding.ActivityQuestionBinding;
import com.android.flagquiz.models.Model;
import com.android.flagquiz.network.MyClient;
import com.android.flagquiz.utils.PrefUtil;
import com.blongho.country_data.World;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class QuestionActivity extends AppCompatActivity {

    ActivityQuestionBinding binding;
    ProgressDialog pd;
    Model m;
    DBHelper db;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityQuestionBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());
        World.init(this);

        pd = new ProgressDialog(this);
        pd.setMessage("checking...");
        pd.setCancelable(false);
        pd.setCanceledOnTouchOutside(false);
        db = new DBHelper(this);

        int c = PrefUtil.current(this) + 1;
        binding.q.setText("Round\n" + c);


        List<Model> q = db.getQuestions();

        if (q.size() > 0) {
            m = q.get(0);

            binding.opt1.setText(m.getAns1());
            binding.opt2.setText(m.getAns2());
            binding.opt3.setText(m.getAns3());
            binding.opt4.setText(m.getAns4());

            int flag = World.getFlagOf(m.getFlag());
            binding.flag.setImageResource(flag);

            binding.opt1.setOnClickListener(view -> callApi(binding.opt1.getText().toString(), m.getCid()));
            binding.opt2.setOnClickListener(view -> callApi(binding.opt2.getText().toString(), m.getCid()));
            binding.opt3.setOnClickListener(view -> callApi(binding.opt3.getText().toString(), m.getCid()));
            binding.opt4.setOnClickListener(view -> callApi(binding.opt4.getText().toString(), m.getCid()));
        }

    }

    private void callApi(String answer, String id) {
        pd.show();
        MyClient.getInstance().getMyApi().result(id, answer)
                .enqueue(new Callback<Integer>() {
                    @Override
                    public void onResponse(@NonNull Call<Integer> call, @NonNull Response<Integer> response) {
                        Integer body = response.body();
                        pd.dismiss();

                        int c = PrefUtil.current(QuestionActivity.this);
                        int t = c + 1;
                        PrefUtil.saveCurrent(QuestionActivity.this, t);


                        Log.e("SIZEEE", String.valueOf(c));
                        if (body == 1) {
                            int oc = PrefUtil.correct(QuestionActivity.this);
                            int r = oc + 1;
                            PrefUtil.saveCorrect(QuestionActivity.this, r);

                            if (t < 10) {
                                startActivity(new Intent(QuestionActivity.this, AnswerActivity.class).putExtra("ans", 1));
                            } else {
                                startActivity(new Intent(QuestionActivity.this, ResultActivity.class));
                            }
                        } else {
                            if (t < 10) {
                                startActivity(new Intent(QuestionActivity.this, AnswerActivity.class).putExtra("ans", 0));
                            } else {
                                startActivity(new Intent(QuestionActivity.this, ResultActivity.class));
                            }
                        }
                        db.deleteQuestion(String.valueOf(m.getId()));
                        finish();
                    }

                    @Override
                    public void onFailure(@NonNull Call<Integer> call, @NonNull Throwable t) {
                        pd.dismiss();
                    }
                });
    }
}
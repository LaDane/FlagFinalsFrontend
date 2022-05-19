package com.android.flagquiz.activities;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import com.android.flagquiz.databinding.ActivityAnswerBinding;
import com.android.flagquiz.utils.PrefUtil;

public class AnswerActivity extends AppCompatActivity {
    ActivityAnswerBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivityAnswerBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        int ans = getIntent().getIntExtra("ans", 0);
        int c = PrefUtil.current(this);

        if (ans == 1) {
            binding.result.setText("Correct answer!");
        } else {
            binding.result.setText("Wrong answer!");
        }

        String res = PrefUtil.correct(this) + " out of " + c + " correct answers";
        binding.question.setText(res);

        binding.next.setOnClickListener(view -> {
            startActivity(new Intent(AnswerActivity.this, QuestionActivity.class));
            finish();
        });
    }
}
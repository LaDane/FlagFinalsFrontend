package com.android.flagquiz.utils;

import android.content.Context;
import android.content.SharedPreferences;

public class PrefUtil {
    static SharedPreferences pref;
    static SharedPreferences.Editor editor;
    public static final String PREF_NAME = "pref";

    public static void saveCurrent(Context context, Integer value) {
        SharedPreferences pref = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = pref.edit();
        editor.putInt("current", value);
        editor.apply();
    }

    public static Integer current(Context context) {
        SharedPreferences pref = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        return pref.getInt("current", 0);
    }

    public static void saveCorrect(Context context, Integer value) {
        SharedPreferences pref = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        SharedPreferences.Editor editor = pref.edit();
        editor.putInt("correct", value);
        editor.apply();
    }

    public static Integer correct(Context context) {
        SharedPreferences pref = context.getSharedPreferences(PREF_NAME, Context.MODE_PRIVATE);
        return pref.getInt("correct", 0);
    }
}

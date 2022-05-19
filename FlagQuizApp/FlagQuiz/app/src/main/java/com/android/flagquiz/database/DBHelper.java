package com.android.flagquiz.database;

import android.annotation.SuppressLint;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;

import com.android.flagquiz.models.Model;

import java.util.ArrayList;
import java.util.List;

public class DBHelper extends SQLiteOpenHelper {

    // Logcat tag
    private static final String LOG = DBHelper.class.getName();

    // Database Version
    private static final int DATABASE_VERSION = 1;

    // Database Name
    private static final String DATABASE_NAME = "flag-quiz";

    // Table Names
    private static final String TABLE_NAME = "questions";

    // Common column names
    private static final String KEY_ID = "id";
    private static final String KEY_CID = "cid";
    private static final String KEY_FLAG = "flag";
    private static final String KEY_ANS1 = "ans1";
    private static final String KEY_ANS2 = "ans2";
    private static final String KEY_ANS3 = "ans3";
    private static final String KEY_ANS4 = "ans4";
    private static final String KEY_POINT = "points";

    String[] columnsTimetable = {KEY_ID, KEY_CID, KEY_FLAG, KEY_ANS1, KEY_ANS2, KEY_ANS3, KEY_ANS4, KEY_POINT};

    // Table Create Statement
    private static final String CREATE_TABLE_TIMETABLE = "CREATE TABLE " + TABLE_NAME
            + "(" + KEY_ID + " INTEGER PRIMARY KEY AUTOINCREMENT,"
            + KEY_CID + " TEXT,"
            + KEY_FLAG + " TEXT,"
            + KEY_ANS1 + " TEXT,"
            + KEY_ANS2 + " TEXT,"
            + KEY_ANS3 + " TEXT,"
            + KEY_ANS4 + " TEXT,"
            + KEY_POINT + " TEXT" + ")";

    public DBHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {

        // creating required tables
        db.execSQL(CREATE_TABLE_TIMETABLE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {
        // on upgrade drop older tables
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_NAME);

        // create new tables
        onCreate(db);
    }

    public void insertQuestion(Model t) {
        SQLiteDatabase db = this.getWritableDatabase();

        ContentValues values = new ContentValues();
        values.put(KEY_CID, t.getCid());
        values.put(KEY_FLAG, t.getFlag());
        values.put(KEY_ANS1, t.getAns1());
        values.put(KEY_ANS2, t.getAns2());
        values.put(KEY_ANS3, t.getAns3());
        values.put(KEY_ANS4, t.getAns4());
        values.put(KEY_POINT, t.getPoints());

        // insert row
        db.insert(TABLE_NAME, null, values);
    }

    @SuppressLint("Range")
    public List<Model> getQuestions() {
        List<Model> list = new ArrayList<>();

        SQLiteDatabase database = this.getReadableDatabase();

        @SuppressLint("Recycle") Cursor cursor = database.query(TABLE_NAME, columnsTimetable, null, null, null, null, null);
        while (cursor.moveToNext()) {
            list.add(new Model(
                    cursor.getInt(cursor.getColumnIndex(KEY_ID)),
                    cursor.getString(cursor.getColumnIndex(KEY_CID)),
                    cursor.getString(cursor.getColumnIndex(KEY_FLAG)),
                    cursor.getString(cursor.getColumnIndex(KEY_ANS1)),
                    cursor.getString(cursor.getColumnIndex(KEY_ANS2)),
                    cursor.getString(cursor.getColumnIndex(KEY_ANS3)),
                    cursor.getString(cursor.getColumnIndex(KEY_ANS4)),
                    cursor.getString(cursor.getColumnIndex(KEY_POINT))
            ));
        }

        Log.e("TIMETABLE", list.toString());
        return list;
    }

    public void deleteQuestion(String id) {
        SQLiteDatabase db = this.getWritableDatabase();
        db.delete(TABLE_NAME, KEY_ID + " = ?", new String[]{id});
        db.close();
    }

    public void deleteQuestions() {
        SQLiteDatabase db = this.getWritableDatabase();
        db.delete(TABLE_NAME, null, null);
        db.close();
    }

}
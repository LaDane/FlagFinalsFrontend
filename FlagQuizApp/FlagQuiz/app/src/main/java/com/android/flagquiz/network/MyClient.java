package com.android.flagquiz.network;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.concurrent.TimeUnit;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MyClient {

    public static final String BASE_URL = "https://alekw.dk/flagfinals/api/lite/";
    private static MyClient myClient;
    private final Retrofit retrofit;

    private MyClient() {

        HttpLoggingInterceptor interceptor = new HttpLoggingInterceptor();
        interceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        OkHttpClient client = new OkHttpClient.Builder()
                .connectTimeout(2, TimeUnit.MINUTES)
                .readTimeout(2, TimeUnit.MINUTES)
                .writeTimeout(3, TimeUnit.MINUTES)
                .addInterceptor(interceptor).build();

        Gson gson = new GsonBuilder().setLenient().create();

        retrofit = new Retrofit.Builder().baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gson))
                .client(client)
                .build();
    }

    public static synchronized MyClient getInstance() {
        if (myClient == null) {
            myClient = new MyClient();
        }
        return myClient;
    }

    public Api getMyApi() {
        return retrofit.create(Api.class);
    }
}
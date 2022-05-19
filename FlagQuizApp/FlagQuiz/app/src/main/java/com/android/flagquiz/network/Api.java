package com.android.flagquiz.network;

import com.google.gson.JsonObject;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface Api {

    @GET("generate")
    Call<JsonObject> generate();

    @GET("result/{correctCountryId}/{answer}")
    Call<Integer> result(@Path("correctCountryId") String id,
                         @Path("answer") String answer);


}
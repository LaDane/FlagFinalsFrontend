package com.android.flagquiz.models;

public class Model {
    int id;
    String cid, flag, ans1, ans2, ans3, ans4, points;

    public Model() {
    }

    public Model(String cid, String flag, String ans1, String ans2, String ans3, String ans4, String points) {
        this.cid = cid;
        this.flag = flag;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
        this.points = points;
    }

    public Model(int id, String cid, String flag, String ans1, String ans2, String ans3, String ans4, String points) {
        this.id = id;
        this.cid = cid;
        this.flag = flag;
        this.ans1 = ans1;
        this.ans2 = ans2;
        this.ans3 = ans3;
        this.ans4 = ans4;
        this.points = points;
    }

    public int getId() {
        return id;
    }

    public String getCid() {
        return cid;
    }

    public String getFlag() {
        return flag;
    }

    public String getAns1() {
        return ans1;
    }

    public String getAns2() {
        return ans2;
    }

    public String getAns3() {
        return ans3;
    }

    public String getAns4() {
        return ans4;
    }

    public String getPoints() {
        return points;
    }
}

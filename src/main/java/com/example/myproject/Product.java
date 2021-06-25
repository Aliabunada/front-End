package com.example.myproject;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import java.util.ArrayList;

public class Product extends AppCompatActivity {
ListView listview;
ArrayList<String> names;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_product);
        listview =findViewById(R.id.listview);
        names =new ArrayList<>();
        names.add("Mai");
        names.add("Mai");
        ArrayAdapter<String> arrayAdapter =new ArrayAdapter<String>(getApplicationContext(),android.R.layout.simple_list_item_1,names);
        listview.setAdapter(arrayAdapter);

    }

}
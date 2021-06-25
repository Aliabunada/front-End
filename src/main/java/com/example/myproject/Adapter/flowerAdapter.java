package com.example.myproject.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;
import com.example.myproject.R;
import com.example.myproject.model.flower;

import java.util.ArrayList;
import de.hdodenhof.circleimageview.CircleImageView;

public class flowerAdapter {
    ArrayList<flower> flowers;
    Context context;
    LayoutInflater layoutInflater;

    public flowerAdapter(ArrayList<flower> flowers, Context context) {
        this.flowers = flowers;
        this.context = context;
        layoutInflater = (LayoutInflater) context.getSystemService(context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
        return flower.size();
    }

    @Override
    public Object getItem(int position) {
        return flower.get(position);
    }

    @Override
    public long getItemId(int position) {
        return flower.get(position).getId();
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View root = layoutInflater.inflate(R.layout.list_country,null);
        CircleImageView image_country = root.findViewById(R.id.image_country);
        TextView tv_country = root.findViewById(R.id.tv_country);
        TextView tv_capital = root.findViewById(R.id.tv_capital);
        TextView tv_date = root.findViewById(R.id.tv_date);

        image_country.setImageResource(folwer.get(position).getImage());
        tv_country.setText(folwer.get(position).getCountry_name());
        tv_capital.setText(folwer.get(position).getCaptial_name());
        tv_date.setText(folwer.get(position).getDate());
        return root;
    }
}

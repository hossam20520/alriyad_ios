package eg.com.alriyadhmisr.ds1csre;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

import ch.byrds.capacitor.contacts.Contacts;

public class MainActivity extends BridgeActivity {
  @Override
	public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.registerPlugin(Contacts.class);

    };
}

import javafx.beans.value.ChangeListener;
import javafx.application.Application;
import javafx.beans.value.ObservableValue;
import javafx.scene.Scene;
import javafx.scene.layout.VBox;
import javafx.scene.text.FontSmoothingType;
import javafx.scene.web.WebView;
import javafx.stage.Stage;
import javafx.stage.StageStyle;
import java.util.List;
import javafx.scene.web.WebEngine;
 
public class java extends Application
{
    public static void main(String[] args) 
    {
        Application.launch(args);
    }
     
    @Override
    public void start(final Stage stage) 
    {
        // Create the WebView
        WebView webView = new WebView();
        final Parameters params = getParameters();
        final List<String> parameters = params.getRaw();
         
        // Disable the context menu
        webView.setContextMenuEnabled(true);
         
        // Set font smoothing type to GRAY
        webView.setFontSmoothingType(FontSmoothingType.GRAY);
         
        // Create the WebEngine
        final WebEngine webEngine = webView.getEngine();
        // Load the StartPage
        if(parameters.isEmpty() == true){
            webEngine.load("https://example.com");
        }else{
            webEngine.load(parameters.get(0));
        }
        
        stage.setTitle("Loading..........");
         
        // Update the stage title when a new web page title is available        
        webEngine.titleProperty().addListener(new ChangeListener<String>()
        {
            public void changed(ObservableValue<? extends String> ov,
                    final String oldvalue, final String newvalue) 
            {
                stage.setTitle(newvalue);
            }
        });

        webEngine.locationProperty().addListener(new ChangeListener<String>()
        {
            public void changed(ObservableValue<? extends String> ov,
                    final String oldvalue, final String newvalue) 
            {
                stage.setTitle("Loading..........");
            }
        });
         
        // Create the VBox
        VBox root = new VBox();
        // Add the Children to the VBox
        root.getChildren().add(webView);
 
        // // Set the Style-properties of the VBox
        // root.setStyle("-fx-padding: 10;" +
        //         "-fx-border-style: solid inside;" +
        //         "-fx-border-width: 2;" +
        //         "-fx-border-insets: 5;" +
        //         "-fx-border-radius: 5;" +
        //         "-fx-border-color: blue;");
 
        // Create the Scene
        Scene scene = new Scene(root);
        // Add  the Scene to the Stage

        //if(parameters.get(1) == "no-decor"){
        //stage.initStyle(StageStyle.UNDECORATED);
        stage.setScene(scene);
        // Display the Stage
        stage.show();
        //}
    }
}
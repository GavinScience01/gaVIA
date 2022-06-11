module com.gavia.gavia {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.web;


    opens com.gavinscience.gavia to javafx.fxml;
    exports com.gavinscience.gavia;
}
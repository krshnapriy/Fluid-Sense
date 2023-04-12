const int ldrPin = D0; 
int ldrValue ; 
int buzzerPin = D1; 


void setup() {
  Serial.begin(9600); // Initialize serial communication
  pinMode(buzzerPin, OUTPUT); 
}

void loop() {
  ldrValue = analogRead(ldrPin); // Read the analog value from the LDR module
  Serial.println(ldrValue);
  if(ldrValue == 0){
    digitalWrite(buzzerPin, HIGH); // Turn on the buzzer
    delay(500);  // Wait for 500ms
    digitalWrite(buzzerPin, LOW); 
    delay(500); 
  }
  delay(1000); 
}




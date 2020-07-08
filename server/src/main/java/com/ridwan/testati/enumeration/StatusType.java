package com.ridwan.testati.enumeration;

public enum StatusType {

	PROMOTION(0,"PROMOTION"),
	DEMOTION(1,"DEMOTION");
	
	private int intValue;
	private String strValue;
	StatusType(int intValue, String strValue) {
		this.intValue = intValue;
		this.strValue = strValue;
	}
	public int getIntValue() {
		return intValue;
	}
	public void setIntValue(int intValue) {
		this.intValue = intValue;
	}
	public String getStrValue() {
		return strValue;
	}
	public void setStrValue(String strValue) {
		this.strValue = strValue;
	}
	
}

package com.caltech.projectphase1;


import java.io.File;
import java.io.IOException;
import java.util.Scanner;


public class FileCreate {

	public void FileMake() throws IOException {
		
		//Ask user to input the file name
		String path="C:\\Caltech\\";
		Scanner sc=new Scanner(System.in);
		System.out.println("Please enter the file name.");
		String filename=sc.next();
		String finalpath=path+filename;
		System.out.println(finalpath);
		
		//create a file
		File file=new File(finalpath);
		boolean res=file.createNewFile();
		if(res!=true) {
			System.out.println("File is not created");
		}
		else {
			System.out.println("File is successfully created ");
		}

	}
	
	
}

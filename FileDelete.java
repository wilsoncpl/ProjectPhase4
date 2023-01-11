package com.caltech.projectphase1;


import java.io.File;
import java.io.IOException;
import java.util.Scanner;


public class FileDelete {

	public void FileWriteOff() throws IOException {
		
		// Method to delete the file
		String path="C:\\Caltech\\";
		Scanner sc=new Scanner(System.in);
		System.out.println("Please enter the file name.");
		String filename=sc.next();
		String finalpath=path+filename;
		System.out.println(finalpath);
		
		File file=new File(finalpath);
		//delete operation
		file.delete();
		System.out.println("file gets deleted");
		
	}

	
	
	
}

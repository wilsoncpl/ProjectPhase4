package com.caltech.projectphase1;


import java.io.File;
import java.io.IOException;
import java.util.Scanner;

public class FileSearch {

	//search the files 
	public void FileLookup () throws IOException {
			String path="C:\\Caltech\\";
			Scanner sc=new Scanner(System.in);
			System.out.println("Please enter the file to search.");
			
			String filenamesearch=sc.next();
			File file=new File(path);
			//display operation
			File filename[]=file.listFiles();
			//for-each
			int flag=0;
			for(File ff:filename) {
				if(ff.getName().equals(filenamesearch)) {
					flag=1;
					break;
				}
				else {
					flag=0;
				}
			}
			
			if(flag==1) {
				System.out.println("File is found");
			}
			else {
				System.out.println("File is not found");
			}
		
	}
	
	
}

package com.caltech.projectphase1;

import java.io.File;
import java.io.IOException;


public class FileDisplay {

		//display the files in an ascending order
		public void FileAscending() throws IOException {
			String path="C:\\Caltech\\";
			File file=new File(path);
			//display operation
			File filename[]=file.listFiles();
			
			if (filename != null) {
			//for-each
			System.out.println("The list of files in asscending order in the "+ path +"is");
			for(File ff:filename) {
				System.out.println(ff.getName());
			}
			}
			else {
				System.out.println("There is no file in "+ path);	
			}
				
		}
	
}

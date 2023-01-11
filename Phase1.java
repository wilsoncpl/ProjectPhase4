package com.caltech.projectphase1;

import java.io.IOException;
import java.util.Scanner;
import java.io.File;


public class Phase1 {
	 	static int choice;
	 	static String choicesubmenu;
	 
		public static void main(String[] args) throws Exception {
			
			Scanner scanner = new Scanner(System.in);
			Scanner scannersubmenu = new Scanner(System.in);
			
			// Welcome message
			// Developer details
			System.out.println("WELCOME!");
			System.out.println("APPLICVATION NAME: Phase 1 Project for PG in Full Stack Web Development");
			System.out.println("APPLICATION CREATION DATE: 11 Jan 2023");
			System.out.println("DEVELOPER: Wilson Chung Phengh Lee");
			System.out.println("");
			System.out.println("");
			

			// use a while loop to keep requesting user input
			while (true) {
				
			//Asking user to make a choice for MAIN MENU
			System.out.println("******* MAIN MENU *********");
	        System.out.println("Enter 1 for RETRIEVING file in ASCENDING order");
	        System.out.println("Enter 2 for FILE OPERATION");
	        System.out.println("Enter 3 for EXIT the application");
	        
	        // User input the choice
	        choice = scanner.nextInt();
	        
	        //Creating switch block for MAIN MENU
	        switch (choice) {
	 
	            //Creating cases and calling methods as per the users choice
	            case 1:
	            	 //Instantiate the FileDisplay Class and create an object 
	            	 FileDisplay FAscend = new FileDisplay();
	            	 //Call the FileAscending method in the FileDisplay Class
	            	 FAscend.FileAscending();
	            	 System.out.println("");
	            	 System.out.println("");
	                break;
	            
	                
	                
	            case 2:
	            	//Asking user to make a choice for MAIN MENU
	            	System.out.println("******* SUB MENU *********");
	            	System.out.println("Enter A for ADD a file to the directory");
	    	        System.out.println("Enter B for DELETE a file in the direcotry");
	    	        System.out.println("Enter C for SEARCH a file in the directory");
	    	        System.out.println("Enter D to EXIT sub-menu");
	    	        
	    	     // User input the choice
	    	        choicesubmenu = scanner.next();
	    	        
	    	      //Creating switch block
	    	        switch (choicesubmenu) {
	    	      
	    	        	//Creating cases and calling methods as per the users choice
		            	case "A":
		            		//create a file in a directory
		            		//Instantiate the FileCreate Class and create an object 
			            	FileCreate Fcreate = new FileCreate ();
			            	//Call the FileAscending method in the FileDisplay Class
			            	Fcreate.FileMake();
			            	System.out.println("");
			            	System.out.println("");
 			            	break;
		            		
 			            	
 			            	
		            	case "B":
		            		//delete a file in a directory
		            		//Instantiate the FileDelete Class and create an object 
			            	FileDelete Fdelete = new FileDelete();
			            	//Call the FileAscending method in the FileDisplay Class
			            	Fdelete.FileWriteOff();
			            	System.out.println("");
			            	System.out.println("");
		            		break;
		            	
		            		
		            		
		            	case "C":
		            		//Search a file in a directory
		            		//Instantiate the FileSearch Class and create an object 
			            	FileSearch Fsearch = new FileSearch();
			            	//Call the FileLookup method in the FileSearch Class
			            	Fsearch.FileLookup();
			            	System.out.println("");
			            	System.out.println("");
		            		break;
		            		
		            	
		            	
		            	case "D":
		                    break;
	    	        	
		                    
		                
		                default:
		                	System.out.println("You have entered the wrong choice");
		                	System.out.println("Please enter A or B or C or D\n");
	    	        }
	    	        break;
	    	        
	    	        
	            case 3:
	            	System.out.println("You have existed the application. Bye!");
	            	System.exit(0);
	                break;
	
	                
	                
	            default:
	                System.out.println("You have entered the wrong choice\n");
	        }
			}
		
		}

}

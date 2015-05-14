package org.petfinder.spring;

import java.util.LinkedHashMap;
import java.util.List;
 


import org.springframework.web.client.RestTemplate;
 
import org.petfinder.spring.controller.PetRestURIConstants;
import org.petfinder.spring.model.Pet;
 
public class TestSpringRestExample {
 
    public static final String SERVER_URI = "http://localhost:8080/SpringRestExample";
     
    public static void main(String args[]){
         
        testGetDummyPet();
        System.out.println("*****");
        testCreatePet();
        System.out.println("*****");
        testGetPet();
        System.out.println("*****");
        testGetAllPet();
    }
 
    private static void testGetAllPet() {
        RestTemplate restTemplate = new RestTemplate();        
        List<LinkedHashMap> pets = restTemplate.getForObject(SERVER_URI+PetRestURIConstants.GET_ALL_PET, List.class);
        System.out.println(pets.size());
        for(LinkedHashMap map : pets){
            System.out.println("ID="+map.get("id")+",Name="+map.get("name")+",CreatedDate="+map.get("createdDate"));;
        }
    }
 
    private static void testCreatePet() {
        RestTemplate restTemplate = new RestTemplate();
        Pet pet = new Pet();
        pet.setId(1);pet.setName("Fido");
        Pet response = restTemplate.postForObject(SERVER_URI+PetRestURIConstants.CREATE_PET, pet, Pet.class);
        printPetData(response);
    }
 
    private static void testGetPet() {
        RestTemplate restTemplate = new RestTemplate();
        Pet pet = restTemplate.getForObject(SERVER_URI+"/rest/pet/1", Pet.class);
        printPetData(pet);
    }
 
    private static void testGetDummyPet() {
        RestTemplate restTemplate = new RestTemplate();
        Pet pet = restTemplate.getForObject(SERVER_URI+PetRestURIConstants.DUMMY_PET, Pet.class);
        printPetData(pet);
    }
     
    public static void printPetData(Pet pet){
        System.out.println("ID="+pet.getId()+",Name="+pet.getName()+",CreatedDate="+pet.getCreatedDate());
    }
}
package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UserController {
    
    // 리파지토리 필드 생성자
    // 자동으로 실행 의존성 주입
    @Autowired
    private UserDTOEntityRepository userDTOEntityRepository;


    
    @GetMapping("/writeForm.do")
    public String writeMethod(){
        return "writeForm";
    }

    @PostMapping("/view.do")
    public String viewMethod(UserDTO userDTO, Model model){
        System.out.println(userDTO.toString()); // console.log()

        model.addAttribute("userName",userDTO.getUserName());
        model.addAttribute("userHp",userDTO.getUserHp());
        model.addAttribute("userEmail",userDTO.getUserEmail());
        model.addAttribute("userSubject",userDTO.getUserSubject());
        model.addAttribute("userContent",userDTO.getUserContent());

        // JPA
        // 데이터베이스에 저장가능한 형태의 데이터 엔티티(데이터의 집합, 저장되고 관리되어야하는 데이터)를 저장한다.
        // 생성된 엔티티는 리파지토리에 의해서 데이터베이스에 저장된다.
        // 1. 폼데이터를 엔티티로 변환 => 엔티티 생성
        UserDTOEntity userDTOEntity = userDTO.toEntity();
        System.out.println(userDTOEntity.toString()); // 1차 출력 내용 => 엔티티
        // id = null 엔티티
        // 데이터베이스에 저장 리파지토리
        UserDTOEntity saved = userDTOEntityRepository.save(userDTOEntity);
        System.out.println( saved.toString() );
        // id = 1 데이터베이스저장 할당 번호 증가

        return "view";
    }
}

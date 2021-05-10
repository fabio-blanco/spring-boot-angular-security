package br.com.fbsoftware.sample.spring.boot.springbootangularsecurity;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * @author Fabio Blanco
 * @since 06/05/2021
 */
@RestController
@RequestMapping("/api")
public class GeneralApiController {

    @GetMapping("initial-data")
    public Map<String, Object> initialData() {
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "That's an Angular secured page!");
        return model;
    }

    @GetMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}

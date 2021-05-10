package br.com.fbsoftware.sample.spring.boot.springbootangularsecurity;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

/**
 * @author Fabio Blanco
 * @since 08/05/2021
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.httpBasic()
                    .and()
                    .authorizeRequests().antMatchers("/index.html", "/", "/home",
                                                     "/login", "/main.js*", "/polyfills.js*",
                                                     "/runtime.js*", "/vendor.js*", "/styles.css*",
                                                     "/favicon.ico", "/api/initial-data").permitAll()
                                        .anyRequest().authenticated()
                    .and()
                    .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
    }
}

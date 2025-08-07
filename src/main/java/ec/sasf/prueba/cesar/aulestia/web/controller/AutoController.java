package ec.sasf.prueba.cesar.aulestia.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.AutoEntity;
import ec.sasf.prueba.cesar.aulestia.service.AutoService;
import ec.sasf.prueba.cesar.aulestia.service.dto.AutoDto;

@RestController
@RequestMapping("/autos")
@CrossOrigin("*")
public class AutoController {
    private final AutoService autoService;

    public AutoController(AutoService autoService) {
        this.autoService = autoService;
    }

    @PostMapping
    public ResponseEntity<AutoEntity> add(@RequestBody AutoDto dto) {
        return ResponseEntity.ok(autoService.add(dto));
    }

    @GetMapping("/disponible")
    public ResponseEntity<List<AutoEntity>> mostrarDisponibles() {
        return ResponseEntity.ok(autoService.mostrarDisponibles());
    }

}

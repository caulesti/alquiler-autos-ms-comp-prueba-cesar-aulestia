package ec.sasf.prueba.cesar.aulestia.web.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ContratoAlquilerEntity;
import ec.sasf.prueba.cesar.aulestia.service.ContratoAlquilerService;
import ec.sasf.prueba.cesar.aulestia.service.dto.ContratoAlquilerDto;
import ec.sasf.prueba.cesar.aulestia.service.dto.DevolucionDto;

@RestController
@RequestMapping("/alquileres")
@CrossOrigin("*")
public class ContratoAlquilerController {
    private final ContratoAlquilerService contratoAlquilerService;

    public ContratoAlquilerController(ContratoAlquilerService contratoAlquilerService) {
        this.contratoAlquilerService = contratoAlquilerService;
    }

    @PostMapping
    public ResponseEntity<ContratoAlquilerEntity> add(@RequestBody ContratoAlquilerDto dto) {
        return ResponseEntity.ok(contratoAlquilerService.add(dto));
    }

    @PutMapping("/{id}/devolucion")
    public ResponseEntity<ContratoAlquilerEntity> devolver(@PathVariable Long id, @RequestBody DevolucionDto dto) {
        return ResponseEntity.ok(contratoAlquilerService.devolver(id, dto));
    }

    @GetMapping("/multas")
    public ResponseEntity<List<ContratoAlquilerEntity>> alquilerConMulta() {
        return ResponseEntity.ok(contratoAlquilerService.alquilerConMulta());
    }
}

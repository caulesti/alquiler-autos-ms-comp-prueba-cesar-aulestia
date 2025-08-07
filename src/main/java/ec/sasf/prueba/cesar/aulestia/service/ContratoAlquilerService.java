package ec.sasf.prueba.cesar.aulestia.service;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.AutoEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.entity.ContratoAlquilerEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.AutoRepository;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.ClienteRepository;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.ContratoAlquilerRepository;
import ec.sasf.prueba.cesar.aulestia.service.dto.ContratoAlquilerDto;
import ec.sasf.prueba.cesar.aulestia.service.dto.DevolucionDto;
import jakarta.transaction.Transactional;

@Service
public class ContratoAlquilerService {
    private final ContratoAlquilerRepository contratoAlquilerRepository;
    private final AutoRepository autoRepository;
    private final ClienteRepository clienteRepository;

    public ContratoAlquilerService(ContratoAlquilerRepository contratoAlquilerRepository, AutoRepository autoRepository, ClienteRepository clienteRepository) {
        this.contratoAlquilerRepository = contratoAlquilerRepository;
        this.autoRepository = autoRepository;
        this.clienteRepository = clienteRepository;
    }

    @Transactional
    public ContratoAlquilerEntity add(ContratoAlquilerDto dto) {
        ContratoAlquilerEntity contrato = new ContratoAlquilerEntity();
        AutoEntity auto = autoRepository.findById(dto.getIdAuto()).orElseThrow(() -> new IllegalArgumentException("Auto no encontrado"));
        if (!auto.getDisponible()){
            throw new IllegalArgumentException("Auto no disponible");
        }
        auto.setDisponible(false);
        contrato.setAuto(auto);
        contrato.setCliente(clienteRepository.findById(dto.getIdCliente()).orElseThrow(() -> new IllegalArgumentException("Cliente no encontrado")));
        contrato.setFechaInicio(dto.getFechaInicio());
        contrato.setFechaFin(dto.getFechaFin());
        contrato.setFechaDevolucion(null);
        contrato.setMulta(0.0);
        return contratoAlquilerRepository.save(contrato);
    }

    public ContratoAlquilerEntity devolver(Long id, DevolucionDto dto) {
        ContratoAlquilerEntity contrato = contratoAlquilerRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Contrato no existe"));
        LocalDateTime fechaDevolucion = dto.getFechaDevolucion();
        contrato.getAuto().setDisponible(true);
        contrato.setFechaDevolucion(fechaDevolucion);
        LocalDateTime fechaFin = contrato.getFechaFin();
        if (fechaDevolucion.isAfter(fechaFin)) {
            Long diasRetraso = ChronoUnit.DAYS.between(fechaFin, fechaDevolucion);
            double multa = diasRetraso * 20.0;
            contrato.setMulta(multa);
        }
        return contratoAlquilerRepository.save(contrato);
    }

    public List<ContratoAlquilerEntity> alquilerConMulta(){
        return contratoAlquilerRepository.findByMultaGreaterThan(0);
    }

}

package ec.sasf.prueba.cesar.aulestia.service;

import java.util.List;

import org.springframework.stereotype.Service;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.AutoEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.AutoRepository;
import ec.sasf.prueba.cesar.aulestia.service.dto.AutoDto;

@Service
public class AutoService {
    private final AutoRepository autoRepository;

    public AutoService(AutoRepository autoRepository) {
        this.autoRepository = autoRepository;
    }

    public AutoEntity add(AutoDto dto) {
        AutoEntity autoEntity = new AutoEntity();
        autoEntity.setMarca(dto.getMarca());
        autoEntity.setModelo(dto.getModelo());
        autoEntity.setAnio(dto.getAnio());
        autoEntity.setPlaca(dto.getPlaca());
        autoEntity.setDisponible(true);
        return autoRepository.save(autoEntity);
    }

    public List<AutoEntity> mostrarDisponibles(){
        return autoRepository.findByDisponibleTrue();
    } 
}

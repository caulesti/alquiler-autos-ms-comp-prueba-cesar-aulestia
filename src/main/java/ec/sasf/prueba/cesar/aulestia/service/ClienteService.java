package ec.sasf.prueba.cesar.aulestia.service;

import org.springframework.stereotype.Service;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ClienteEntity;
import ec.sasf.prueba.cesar.aulestia.persistence.repository.ClienteRepository;
import ec.sasf.prueba.cesar.aulestia.service.dto.ClienteDto;

@Service
public class ClienteService {
    private final ClienteRepository clienteRepository;

    public ClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    public ClienteEntity add(ClienteDto dto) {
        ClienteEntity clienteEntity = new ClienteEntity();
        clienteEntity.setNombre(dto.getNombre());
        clienteEntity.setCedula(dto.getCedula());
        clienteEntity.setCorreo(dto.getCorreo());
        clienteEntity.setTelefono(dto.getTelefono());
        return clienteRepository.save(clienteEntity);
    }

}

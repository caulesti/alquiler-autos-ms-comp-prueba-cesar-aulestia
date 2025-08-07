package ec.sasf.prueba.cesar.aulestia.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.ContratoAlquilerEntity;

public interface ContratoAlquilerRepository extends JpaRepository<ContratoAlquilerEntity, Long> {
    List<ContratoAlquilerEntity> findByMultaGreaterThan(double multaMinima);
}

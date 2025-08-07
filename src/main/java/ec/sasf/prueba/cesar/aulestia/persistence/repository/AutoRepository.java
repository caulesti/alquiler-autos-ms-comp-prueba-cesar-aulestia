package ec.sasf.prueba.cesar.aulestia.persistence.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ec.sasf.prueba.cesar.aulestia.persistence.entity.AutoEntity;

public interface AutoRepository extends JpaRepository<AutoEntity, Long> {
    List<AutoEntity> findByDisponibleTrue();
}

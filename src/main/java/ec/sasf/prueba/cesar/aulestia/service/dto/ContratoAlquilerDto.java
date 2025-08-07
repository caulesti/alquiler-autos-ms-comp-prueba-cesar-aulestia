package ec.sasf.prueba.cesar.aulestia.service.dto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class ContratoAlquilerDto {

    private Long idAuto;
    private Long idCliente;
    private LocalDateTime fechaInicio;
    private LocalDateTime fechaFin;

}

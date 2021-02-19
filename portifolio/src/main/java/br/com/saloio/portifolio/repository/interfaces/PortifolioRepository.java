package br.com.saloio.portifolio.repository.interfaces;

import br.com.saloio.portifolio.model.Portifolio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PortifolioRepository extends JpaRepository<Portifolio, Long> {
    Optional<Portifolio> findById(Long id);
}

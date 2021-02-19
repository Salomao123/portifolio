package br.com.saloio.portifolio.interfaces;

import br.com.saloio.portifolio.model.Portifolio;

public interface ObjectPersistence {
    Iterable<Portifolio> findAll();
    Portifolio create(Portifolio portifolio);
    Object findById(Long id);
    Object update(Portifolio portifolio, Long id);
    void remove(Long id);
}

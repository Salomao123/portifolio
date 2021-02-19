package br.com.saloio.portifolio.repository.services;

import br.com.saloio.portifolio.interfaces.ObjectPersistence;
import br.com.saloio.portifolio.model.Portifolio;
import br.com.saloio.portifolio.repository.interfaces.PortifolioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class PortifolioService implements ObjectPersistence {

    private final PortifolioRepository repository;

    @Override
    public Iterable<Portifolio> findAll() {
        return repository.findAll();
    }

    @Override
    public Portifolio create(Portifolio portifolio) {
        return repository.save(portifolio);
    }

    @Override
    public Object findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Object update(Portifolio portifolio, Long id) {
        Portifolio port = repository.getOne(id);

        port.setTitle(portifolio.getTitle());
        port.setDescription(portifolio.getDescription());
        port.setAuthor(portifolio.getAuthor());
        port.setCreated_at(portifolio.getCreated_at());

        return repository.save(port);
    }

    @Override
    public void remove(Long id) {
        repository.delete(repository.getOne(id));
    }
}

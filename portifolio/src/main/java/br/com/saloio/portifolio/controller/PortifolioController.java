package br.com.saloio.portifolio.controller;

import br.com.saloio.portifolio.model.Portifolio;
import br.com.saloio.portifolio.repository.services.PortifolioService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/portifolios")
public class PortifolioController {

    private final PortifolioService service;

    @GetMapping("/")
    public Iterable<Portifolio> findAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Portifolio> findById(@PathVariable Long id) {
        return (Optional<Portifolio>) service.findById(id);
    }

    @PostMapping("/save")
    public Portifolio create(@RequestBody Portifolio portifolio) {
        return service.create(portifolio);
    }

    @PutMapping("/{id}")
    public Portifolio update(@RequestBody Portifolio portifolio, @PathVariable("id") Long id) {
        return (Portifolio) service.update(portifolio, id);
    }

    @DeleteMapping("/{id}")
    public void remove(@PathVariable Long id) {
        service.remove(id);
    }
}

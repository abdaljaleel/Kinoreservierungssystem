package saue.kinoticketreservierungssystem.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import saue.kinoticketreservierungssystem.Repository.ShowEventRepository;
import saue.kinoticketreservierungssystem.entity.ShowEvent;

import java.util.List;

@RestController
@RequestMapping("/showEvent")
@CrossOrigin(origins = "*")
public class
ShowEventController {
    @Autowired
    private ShowEventRepository showEventRepository;

    @GetMapping(value = "/showEvents")
    public List<ShowEvent> getShowEvents() {
        return (List<ShowEvent>) showEventRepository.findAll();
    }
    @GetMapping(value = "/showEvent")
    public ShowEvent getShowEvent(@RequestParam("sid") int sid) {
        return showEventRepository.findById(sid);
    }
}

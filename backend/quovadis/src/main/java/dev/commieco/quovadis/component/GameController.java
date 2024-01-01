package dev.commieco.quovadis.component;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;

import dev.commieco.quovadis.annotation.QvCommand;
import dev.commieco.quovadis.annotation.QvDomain;
import dev.commieco.quovadis.annotation.QvPayload;

@Component
@QvDomain("GAME")
public class GameController implements QvWebSocketController {
	@QvCommand("CREATE")
	public GameResponse createGame(@QvPayload GameCreateRequest payload) {}
}

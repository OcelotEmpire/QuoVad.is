package dev.commieco.quovadis.component;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.handler.TextWebSocketHandler;


public class QvWebSocketHandler extends TextWebSocketHandler {
	@Autowired
	private List<QvWebSocketController> endpoints;
}

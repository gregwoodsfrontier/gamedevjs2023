
// You can write more code here

/* START OF COMPILED CODE */

import RootScriptNode from "./RootScriptNode";
import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { IState } from "../../interfaces/IState";
let idCount = 0;
/* END-USER-IMPORTS */

export default class StateMachineNode extends RootScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public id: string = "";

	/* START-USER-CODE */
	private context?: object
	private states = new Map<string, IState>()

	private previousState?: IState
	private currentState?: IState
	private isChangingState = false
	private changeStateQueue: string[] = []

	// Write your code here.
	set contextSetter (_context: object) {
		this.context = _context
	}

	get previousStateName()
	{
		if (!this.previousState)
		{
			return ''
		}

		return this.previousState.name
	}

	get currentStateName()
	{
		if (!this.currentState)
		{
			return ''
		}

		return this.currentState.name
	}

	isCurrentState(name: string)
	{
		if (!this.currentState)
		{
			return false
		}

		return this.currentState.name === name
	}

	addState(name: string, config?: { onEnter?: () => void, onUpdate?: () => void, onExit?: () => void })
	{
		const context = this.context

		this.states.set(name, {
			name,
			onEnter: config?.onEnter?.bind(context),
			onUpdate: config?.onUpdate?.bind(context),
			onExit: config?.onExit?.bind(context)
		})

		return this
	}

	setState(name: string)
	{
		if (!this.states.has(name))
		{
			console.warn(`Tried to change to unknown state: ${name}`)
			return
		}

		if (this.isCurrentState(name))
		{
			return
		}

		if (this.isChangingState)
		{
			this.changeStateQueue.push(name)
			return
		}

		this.isChangingState = true

		console.log(`[StateMachine (${this.id})] change from ${this.currentState?.name ?? 'none'} to ${name}`)

		if (this.currentState && this.currentState.onExit)
		{
			this.currentState.onExit()
		}

		this.previousState = this.currentState
		this.currentState = this.states.get(name)!

		if (this.currentState.onEnter)
		{
			this.currentState.onEnter()
		}

		this.isChangingState = false
	}

	protected awake(): void {
		this.id = (++idCount).toString()
	}

	update()
	{
		if (this.changeStateQueue.length > 0)
		{
			this.setState(this.changeStateQueue.shift()!)
			return
		}

		if (this.currentState && this.currentState.onUpdate)
		{
			this.currentState.onUpdate()
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

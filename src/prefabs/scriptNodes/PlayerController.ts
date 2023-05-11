
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./base/ScriptNode";
import Phaser from "phaser";
import StateMachineNode from "./StateMachineNode";
import PeeState from "../actorStates/PeeState";
import CrouchState from "../actorStates/CrouchState";
import DashState from "../actorStates/DashState";
import StaggerState from "../actorStates/StaggerState";
import JumpState from "../actorStates/JumpState";
import RunState from "../actorStates/RunState";
import IdleState from "../actorStates/IdleState";
import InputManager from "./InputManager";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PlayerController extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		// stateMachineNode
		const stateMachineNode = new StateMachineNode(this);

		// peeState
		const peeState = new PeeState(stateMachineNode);

		// crouchState
		const crouchState = new CrouchState(stateMachineNode);

		// dashState
		const dashState = new DashState(stateMachineNode);

		// staggerState
		const staggerState = new StaggerState(stateMachineNode);

		// jumpState
		const jumpState = new JumpState(stateMachineNode);

		// runState
		const runState = new RunState(stateMachineNode);

		// idleState
		const idleState = new IdleState(stateMachineNode);

		// inputManager
		const inputManager = new InputManager(this);

		this.peeState = peeState;
		this.crouchState = crouchState;
		this.dashState = dashState;
		this.staggerState = staggerState;
		this.jumpState = jumpState;
		this.runState = runState;
		this.idleState = idleState;
		this.stateMachineNode = stateMachineNode;
		this.inputManager = inputManager;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private peeState: PeeState;
	private crouchState: CrouchState;
	private dashState: DashState;
	private staggerState: StaggerState;
	private jumpState: JumpState;
	private runState: RunState;
	private idleState: IdleState;
	private stateMachineNode: StateMachineNode;
	private inputManager: InputManager;
	public sprite!: Phaser.GameObjects.GameObject;

	/* START-USER-CODE */

	// inventory can be accessable from the data manager
	private inventory = [] as number[]

	// Write your code here.
	awake() {

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

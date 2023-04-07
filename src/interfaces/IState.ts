export interface IState {
    name: string
	onEnter?: () => void
	// onUpdate?: (dt: number) => void
    onUpdate?: () => void
	onExit?: () => void
}
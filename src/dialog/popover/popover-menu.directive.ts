import {
	Component,
	Directive,
	Input,
	EventEmitter,
	OnInit,
	Injector,
	ComponentRef,
	ElementRef,
	TemplateRef,
	ViewContainerRef,
	ComponentFactory,
	ComponentFactoryResolver,
	HostListener
} from "@angular/core";
import { DialogDirective } from "./../dialog.directive";
import { PopoverMenu } from "./popover-menu.component";
import { DialogService } from "./../dialog.service";


/**
 * Directive for extending `Dialog` to create popovers containing menus.
 * @export
 * @class PopoverMenuDirective
 * @extends {DialogDirective}
 */
@Directive({
	selector: "[nPopoverMenu]",
	exportAs: "nPopoverMenu",
	providers: [
		DialogService
	]
})
export class PopoverMenuDirective extends DialogDirective {
	/**
	 * Footer template for the `PopoverMenu` component.
	 * @type {TemplateRef<any>}
	 * @memberof PopoverMenuDirective
	 */
	@Input() footer: TemplateRef<any>;
	/**
	 * The content for the body of the `PopoverMenu`.
	 * @type {(string | TemplateRef<any>)}
	 * @memberof PopoverMenuDirective
	 */
	@Input() nPopoverMenu: string | TemplateRef<any>;

	/**
	 * Creates an instance of PopoverMenuDirective.
	 * @param {ElementRef} _elementRef
	 * @param {ViewContainerRef} _viewContainerRef
	 * @param {DialogService} _dialogService
	 * @memberof PopoverMenuDirective
	 */
	constructor(
		protected _elementRef: ElementRef,
		protected _viewContainerRef: ViewContainerRef,
		protected _dialogService: DialogService
	) {
		super(_elementRef, _viewContainerRef, _dialogService);
		_dialogService.create(PopoverMenu);
	}

	/**
	 * Extends the `Dialog` component's data structure to hold `PopoverMenu` content.
	 * @memberof PopoverMenuDirective
	 */
	onDialogInit() {
		this.dialogConfig.content = this.nPopoverMenu;
	}
}

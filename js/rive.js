const riveCanvas = document.getElementById("riveCanvas");
let r;

r = new rive.Rive({
  src: "assets/hesso.riv",
  canvas: riveCanvas,
  layout: new rive.Layout({ fit: rive.Fit.Cover }),
  stateMachines: ["State Machine 1"],
  autoplay: true,
  autobind: false,
  artboard: "Slide 16:9 - 1",
  fitCanvasToArtboardWidth: true,
  fitCanvasToArtboardHeight: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
    window.riveInputs = r.stateMachineInputs("State Machine 1");

    const viewModel = r.viewModelByName("textBoxes");
    const vmi = viewModel.instanceByName("Instance");
    r.bindViewModelInstance(vmi);
    console.log(vmi);

    // Strings
    const textBox1 = vmi.string("textBox1");
    textBox1.value = "Hello World";
  },
});

window.addEventListener("resize", () => {
  r.resizeDrawingSurfaceToCanvas();
});

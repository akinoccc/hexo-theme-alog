import ImgPreview from "./img-preview.js";
import { Toc } from "./aside.js";
import Scroll from "../../utils/scroll.js";

$(function () {
  new Scroll();
  new Toc();
  new ImgPreview();
});
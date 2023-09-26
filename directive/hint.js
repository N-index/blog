import tippy, {animateFill} from 'tippy.js';
import '../assets/css/tippy.css';

// https://atomiks.github.io/tippyjs/v6/all-props/
// content: `列名：${value}`,
// content: value,
// delay: [100, null],
// duration: [250, 200],
// theme: 'light',
// animation: 'perspective-subtle',
// interactive: true,
// animateFill: true,
// plugins: [animateFill],
// onMount(instance) {
// const box = instance.popper.firstElementChild;
// const arrowDom = document.createElement('div');
// arrowDom.className = 'tippy-arrow';
// box.appendChild(arrowDom);
// }


const init = (el, {value, oldValue, modifiers, instance}) => {

    if (!oldValue && !value) return;

    if (oldValue && !value) { // 从有变无
        el._tippy?.destroy();
        return;
    }

    // 仅当内容水平溢出的时候才显示提示
    if (modifiers.onlyOverflow && el.scrollWidth <= el.offsetWidth) {
        el._tippy?.destroy();
        return;
    }
    const tippyConfig = {
        content: value,
        theme: (modifiers.light && 'light') || (modifiers.dark && 'dark') || 'auto',
        maxWidth: (modifiers.noWidth && 'none') || 350,
        placement: (modifiers.auto && 'auto') || (modifiers.left && 'left') || (modifiers.right && 'right') || (modifiers.bottom && 'bottom') || 'top',
        interactive: modifiers.interactive,
        allowHTML: modifiers.html,
        animation: 'perspective-subtle',
        hideOnClick: false,
        arrow: modifiers.noArrow === undefined
    };
    if (el._tippy) { // 更新
        if (value !== oldValue) {// 指令所在组件虚拟 Dom 值变化
            el._tippy.setContent(value);
        }
    } else { // 新建
        const tooltip = tippy(el, tippyConfig);
        tooltip.config = tippyConfig;

        if (modifiers.group){
            if (!instance._groupTippys) instance._groupTippys = [];
            instance._groupTippys.push(tooltip);
        }
    }
}
const unmounted = (el) => {
    el._tippy?.destroy();
}

export default {
    mounted: init,
    updated: init,
    unmounted: unmounted
}


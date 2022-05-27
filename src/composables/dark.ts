// these APIs are auto-imported from @vueuse/core
export const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light'
});
// initial dark mode turn off
isDark.value = false;

export const toggleDark = useToggle(isDark);

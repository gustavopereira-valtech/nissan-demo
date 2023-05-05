<template>
    <span class="flex self-end">
        <div v-if="value < 100" role="progressbar" :style="cssProps"></div>
        <img
            v-else
            :class="classmod"
            class="pointer-events-none"
            src="ico-completed.svg"
            alt="Completed Icon"
        />
    </span>
</template>
    
<script>
export default {
    name: 'CircularProgress',
    props: {
        value: { type: Number, default: 0 },
        size: { type: String, default: '3rem'},
        classmod: { type: String, default: 'w-12'}
    },
    computed: {
        cssProps() {
            return {
                '--value': this.value,
                '--size': this.size
            }
        }
  }
}
</script>

<style>
    @property --pgPercentage {
        syntax: '<number>';
        inherits: false;
        initial-value: 0;
    }

    div[role="progressbar"] {
        --fg: #8089BF;
        --bg: #2B2E3F;
        --pgPercentage: var(--value);
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: 
            radial-gradient(closest-side, #3C4059 80%, transparent 0 99.9%, #3C4059 0),
            conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
            ;
        font-size: calc(var(--size) / 5);
        color: var(--fg);
    }

    div[role="progressbar"]::before {
        counter-reset: percentage var(--value);
        content: counter(percentage) '%';
    }
</style>
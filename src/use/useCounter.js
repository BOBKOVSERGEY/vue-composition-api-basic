import {computed, nextTick, reactive, watch} from "vue";

export function useCounter() {
    const counterData = reactive({
        count: 0,
        title: 'My Counter'
    });
    watch(()=> counterData.count, (newCount) => {
        if(newCount >5 ) {
            alert('go up')
        }
    });
    function increaseCounter(amount)
    {
        counterData.count += amount;
        nextTick(() => {
            appTitleRef.value.style.color = 'red'
        })
    }
    function decreaseCounter(amount)
    {
        if(counterData.count > 0) {
            counterData.count -= amount;
        }
    }
    const oddOrEven = computed(() => {
        if(counterData.count % 2 === 0) {
            return 'even';
        } else {
            return 'odd'
        }
    });
    
    return {
        counterData,
        oddOrEven,
        increaseCounter,
        decreaseCounter
    }
}
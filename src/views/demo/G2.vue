<!--
 * @Author: NanNan
 * @Date: 2025-09-04 15:04:31
 * @LastEditTime: 2025-09-06 22:25:39
 * @Description: 
-->
<template>
  <div class="p-4">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          <a-card title="排序图" :bordered="false">
            <div ref="chartContainer"></div>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <div class="gutter-box">
          <a-card title="水波图" :bordered="false">
            <div ref="waterChartRef"></div>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="8">
        <a-card title="水波图" :bordered="false">
          <div ref="pieChartRef"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue';
import { Chart } from '@antv/g2';

// 1.算法可视化 - 插入排序
const chartContainer = ref<HTMLDivElement | null>(null);
let chart: Chart | null = null;

function insertionSort(container: HTMLDivElement, data: number[]): Chart {
  const chart = new Chart({ container, autoFit: true, height: 240 });
  const keyframe = chart.timingKeyframe();

  // 插入排序生成器
  function* sort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1,
        current = arr[i];
      while (j >= 0 && arr[j] > current) arr[j + 1] = arr[j--];
      arr[j + 1] = current;
      yield arr.map((v, idx) => ({
        value: v,
        swap: idx === j + 1 || idx === i,
      }));
    }
  }

  // 构建 keyframe 动画
  for (const frame of sort([...data])) {
    keyframe
      .interval()
      .data(frame.map((d, i) => ({ index: i, ...d })))
      .axis(false)
      .encode('x', 'index')
      .encode('y', 'value')
      .encode('key', 'value')
      .encode('color', 'swap');
  }

  chart.render();
  return chart;
}

// 2.水波图
const waterChartRef = ref<HTMLDivElement | null>(null);
const waterFunction = (container: HTMLDivElement): Chart => {
  const chart = new Chart({
    container,
    autoFit: true,
    height: 240,
  });
  chart.liquid().data(0.35).style({
    backgroundFill: 'pink',
  });
  chart.render();
  return chart;
};

// 3.饼图
const pieChartRef = ref<HTMLDivElement | null>(null);
const pieFunction = (container: HTMLDivElement): Chart => {
  const chart = new Chart({
    container,
    autoFit: true,
    height: 240,
  });
  chart
    .coordinate({ type: 'theta', innerRadius: 0.25, outerRadius: 0.8 })
    .interval()
    .data([
      { id: 'c', value: 526 },
      { id: 'sass', value: 220 },
      { id: 'php', value: 325 },
      { id: 'elixir', value: 561 },
      { id: 'rust', value: 54 },
    ])
    .transform({ type: 'stackY' })
    .encode('y', 'value')
    .encode('color', 'id')
    .scale('color', {
      range: ['#e8c1a0', '#f47560', '#f1e15b', '#e8a838', '#61cdbb'],
    })
    .label({
      text: 'value',
      fontWeight: 'bold',
      offset: 14,
    })
    .label({
      text: 'id',
      position: 'spider',
      connectorDistance: 0,
      fontWeight: 'bold',
      textBaseline: 'bottom',
      textAlign: (d: any) => (['c', 'sass'].includes(d.id) ? 'end' : 'start'),
      dy: -4,
    })
    .style('radius', 4)
    .style('stroke', '#fff')
    .style('lineWidth', 2)
    .animate('enter', { type: 'waveIn' })
    .legend(false);
  chart.render();
  return chart;
};

// -----------------------end
/**
 * 生命周期函数
 */

onMounted(() => {
  if (chartContainer.value) {
    chart = insertionSort(
      chartContainer.value,
      [43, 2, 5, 24, 53, 78, 82, 63, 49, 6]
    );
  }
  if (waterChartRef.value) {
    chart = waterFunction(waterChartRef.value);
  }
  if (pieChartRef.value) {
    chart = pieFunction(pieChartRef.value);
  }
});

onUnmounted(() => {
  chart?.destroy();
});
</script>

const bgArc = document.getElementById('bgArc');
const purpleArc = document.getElementById('purpleArc');
const ticksGroup = document.getElementById('ticks');

const totalUsers = 240;
const mobileUsers = 180;
const tabletUsers = totalUsers - mobileUsers;

// Make the purple segment match the screenshot: 180 of 240
const ratio = mobileUsers / totalUsers;
const totalLength = bgArc.getTotalLength();
const purpleLength = totalLength * ratio;
purpleArc.style.strokeDasharray = `${purpleLength} ${totalLength}`;
purpleArc.style.strokeDashoffset = '0';

// Draw tick marks along the top arc like the mockup
const startAngle = 200;
const endAngle = 340;
const tickCount = 16;
const cx = 210;
const cy = 180;
const innerR = 153;
const outerR = 171;

for (let i = 0; i <= tickCount; i++) {
  const ratio = i / tickCount;
  const angle = (startAngle + (endAngle - startAngle) * ratio) * (Math.PI / 180);

  const x1 = cx + Math.cos(angle) * innerR;
  const y1 = cy + Math.sin(angle) * innerR;
  const x2 = cx + Math.cos(angle) * outerR;
  const y2 = cy + Math.sin(angle) * outerR;

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1.toFixed(2));
  line.setAttribute('y1', y1.toFixed(2));
  line.setAttribute('x2', x2.toFixed(2));
  line.setAttribute('y2', y2.toFixed(2));
  ticksGroup.appendChild(line);
}

// Match the numeric labels in the mockup
const totalNode = document.querySelector('.total-value');
totalNode.textContent = totalUsers;

document.querySelector('.legend-row:nth-child(1) .value').textContent = mobileUsers;
document.querySelector('.legend-row:nth-child(2) .value').textContent = tabletUsers;

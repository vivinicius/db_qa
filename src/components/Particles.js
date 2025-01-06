import React, { useEffect, useRef } from 'react';
import './Particles.css';

const Particles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particlesArray = [];
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 500; // Aumenta o "brilho" ao redor
        ctx.shadowColor = this.color; // Define a cor do brilho
        ctx.closePath();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x - this.size < 0 || this.x + this.size > canvas.width) {
          this.speedX = -this.speedX;
        }
        if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
          this.speedY = -this.speedY;
        }
      }
    }

    function init() {
      for (let i = 0; i < 8; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = `rgba(93, 74, 180, 0.61)`; // Branco com opacidade
        particlesArray.push(new Particle(x, y, size, color));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth / 1.5; // Reduz a largura para 75% da tela
      canvas.height = window.innerHeight / 1.5; // Reduz a altura para 75% da tela
      particlesArray.length = 0;
      init();
    });
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
};

export default Particles;

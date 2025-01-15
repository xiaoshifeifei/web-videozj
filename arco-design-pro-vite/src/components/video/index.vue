<template>
  <div class="video-upload-container">
    <a-upload
      :action="uploadAction"
      :before-upload="beforeUpload"
      :show-upload-list="false"
      @success="handleUploadChange"
      :limit="1"
      accept="video/*"
    >
      <template #default>
        <div class="video-preview">
          <img :src="video.cover" alt="视频封面" class="video-cover" />
          <div class="video-actions">
            <a-button
              type="text"
              status="danger"
              icon="delete"
              @click="deleteVideo"
            >
              删除
            </a-button>
          </div>
        </div>
      </template>
    </a-upload>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent, ref } from 'vue';
import { Upload, Button, Message } from '@arco-design/web-vue';

interface UploadedVideo {
  file: File | null;
  cover: string; // 视频封面（Base64 URL 或图片链接）
}

export default defineComponent({
  name: 'VideoUpload',
  components: {
    AUpload: Upload,
    AButton: Button,
  },
  setup() {
    const uploadAction = 'https://httpbin.org/post'; // 测试用的上传接口地址
    const video = ref<UploadedVideo>({
      file: null,
      cover: '',
    });
    const file = ref();

    // 检查上传视频格式和大小
    const beforeUpload = (file: File): boolean => {
      const isVideo = file.type.startsWith('video/');
      const isLt2GB = file.size / 1024 / 1024 < 2048; // 限制大小 ≤ 2GB
      if (!isVideo) {
        Message.error('只能上传视频文件');
      }
      if (!isLt2GB) {
        Message.error('视频文件大小不能超过 2GB');
      }
      return isVideo && isLt2GB;
    };
    // const handleUploadChange = (_, currentFile) => {
    //   console.log('currentFile', _, currentFile);

    //   file.value = {
    //     ...currentFile,
    //     // url: URL.createObjectURL(currentFile.file),
    //   };
    // };

    // 处理视频上传成功后的逻辑
    const handleUploadChange = (info) => {
      console.log('finfo------', info);
      const { file } = info;
      console.log('file------', file);

      if (file.status === 'done') {
        const videoElement = document.createElement('video');
        videoElement.src = URL.createObjectURL(info.file);
        videoElement.load();

        videoElement.onloadeddata = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (ctx) {
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            const cover = canvas.toDataURL('image/jpeg');

            video.value = {
              file: file.originFileObj,
              cover,
            };
            Message.success('视频上传成功');
          }
        };

        videoElement.onerror = () => {
          Message.error('无法加载视频数据');
        };
      } else if (file.status === 'error') {
        Message.error('视频上传失败');
      }
    };

    // 删除视频
    const deleteVideo = () => {
      video.value = { file: null, cover: '' };
      Message.success('视频已删除');
    };

    return {
      uploadAction,
      video,
      beforeUpload,
      handleUploadChange,
      deleteVideo,
    };
  },
});
</script>
  
  <style scoped>
.video-upload-container {
  max-width: 400px;
  margin: 10px 0 30px 20px;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed #d9d9d9;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}

.upload-text {
  font-size: 16px;
  color: #606266;
  margin-bottom: 8px;
}

.upload-hint {
  font-size: 12px;
  color: #909399;
}

.video-preview {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-cover {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.video-actions {
  margin-top: 8px;
}
</style>
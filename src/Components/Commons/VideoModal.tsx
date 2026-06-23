import { Modal } from 'antd';

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ open, onClose, videoUrl, title }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
      width={920}
      closeIcon={
        <span className="text-[#1D6748] hover:text-[#155c41] text-2xl font-bold">
          &times;
        </span>
      }
      bodyStyle={{ padding: 0, background: 'transparent' }}
      className="!rounded-3xl overflow-hidden"
    >
      <div className="relative h-0 pt-[56.25%] bg-black">
        <iframe
          src={videoUrl}
          className="absolute inset-0 w-full h-full"
          title={title ?? 'Explore WooHoo® Video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </Modal>
  );
};

export default VideoModal;

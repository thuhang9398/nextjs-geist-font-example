"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface BookingFormProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingForm({ isOpen, onClose }: BookingFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Đặt Lịch Hẹn</DialogTitle>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Họ và tên"
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Số điện thoại"
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Nội dung"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-500"
            ></textarea>
          </div>
          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
          >
            Gửi Yêu Cầu
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
